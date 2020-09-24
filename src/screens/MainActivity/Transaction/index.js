/* eslint-disable no-console */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
  ToastAndroid,
  ActivityIndicator,
  FlatList,
  Alert,
  StatusBar
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Container, Header, Content, List, ListItem, Button, Tab, Tabs, TabHeading, Left, Body, Right, Title, Item, Input, Footer, FooterTab, Separator, Card, CardItem, Icon } from 'native-base';
import Api from '../../../libs/Api';
import moment from 'moment'
import { Actions } from 'react-native-router-flux';
import default_styles from "../../../resources/Themes/DefaultStyles";

export default class TransactionScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // {name: "I",
            // price: 2000,
            // qty:2,
            // subtotal: 5000,
            // unit:"pcs"},{name: "I2",
            // price: 2000,
            // qty:2,
            // subtotal: 10000,
            // unit:"pcs"}
            listTransaction: [],
            loading:false,
            itemProduct:[],
    
            itemHrgPcs:0,
            itemHrgDz:0,
            itemHrgBx:0,
            itemHrgPck:0,
            
            totalItem:0,
            
            id_product:0,
            name_product:"",
            jml_product:0,
            satuan_product:"",
            satuan_hrg_product:0,
    
            totalCalculate:0,
            satuan_unit:"",
    
            // tab 2
            total_harga_keseluruhan:0,
            jumlah_bayar:0,
            jumlah_kembalian:0,
            invoice_code:null,
        };

    }

    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
        let thn = moment().format("YY")
        let bln = moment().format("MM")
        let hr = moment().format("DD")

        let code = "INV-"+thn+"-"+Math.floor(Math.random() * 100)+"-"+bln+"-"+Math.floor(Math.random() * 10)+"-"+hr
        this.setState({invoice_code:code})
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }

    handleBackPress = () => {
        Actions.pop();
        return true;
    };

    getProduct(value){
        this.setState({loading:true})

        Api.get("/products/name/" + value).then(resp =>{
            this.setState({itemProduct: resp.data,loading:false})
        })
        .catch(error =>{
            ToastAndroid.show("'"+error+"'", ToastAndroid.SHORT)
        });
    }

    changeList(item){
        this.setState({name_product: item.name, totalCalculate: 0, satuan_unit: null, satuan_hrg_product:0})

        if(item.price.box){
            this.setState({itemHrgBx:item.price.box})
        }

        if(item.price.dozen){
            this.setState({itemHrgDz:item.price.dozen})
        }

        if(item.price.unit){
            this.setState({itemHrgPcs:item.price.unit})
        }

        if(item.price.pack){
            this.setState({itemHrgPck:item.price.pack})
        }
    }

    totalCalculate(value){
        this.setState({totalCalculate: value})
    }

    storeTransaksi(){
        let params = {
            company_id:1,
            code: this.state.invoice_code,
            total_response:0,
            id_client:-1,
            id_seller:-1,
            items: this.state.listTransaction,
            cash: this.state.jumlah_bayar,
            total_pay: this.state.total_harga_keseluruhan,
            total_back: this.state.jumlah_kembalian,
        };

        if(this.state.jumlah_bayar == 0){
            alert("Silahkan masukan data jumlah pembayaran")
        }else if(this.state.jumlah_kembalian > 0){
            alert("Sisa pembayaran masih harus dibayarkan")
        }else{
            return Api.post('/transactions', params).then(resp =>{
                this.setState({total_harga_keseluruhan:0,jumlah_bayar:0,jumlah_kembalian:0,invoice_code:null,
                    listTransaction: [],loading:false,itemProduct:[],
                    name_product:""})
                ToastAndroid.show("Transaksi Berhasil Disimpan", ToastAndroid.SHORT)
                Actions.pop()
            })
            .catch(error =>{
                alert(JSON.stringify(error))
            });
        }

    }

    removeListObject(e){

        Alert.alert(
            "Semua Nama Barang yang ada di list akan di hapus?",
            "Apakah anda yakin ingin menghapusnya?",
            [
              { text: "Yes", onPress: () => this.removeListAction(e) },
              { text: "No", onPress: () => true }
            ],
            { cancelable: true }
          );
        
          return true;
    }

    removeListAction(e){
        var array = [...this.state.listTransaction]; // make a separate copy of the array

        array = array.filter( el => el.id !== e )

        var msgTotal = array.reduce(function(prev, cur) {
            return prev + cur.subtotal;
        }, 0);

        this.setState({listTransaction: array, total_harga_keseluruhan:msgTotal, jumlah_kembalian:msgTotal-this.state.jumlah_bayar});
    }

    renderLoading(){
        if(this.state.loading)
            return <ActivityIndicator />
    }

  render() {

    StatusBar.setBarStyle("dark-content", true);
    if (Platform.OS === "android") {
        StatusBar.setBackgroundColor("#F4F4F4", true);
        StatusBar.setTranslucent(true);
    }

    return (
		<Container>
            <Header style={default_styles.header}>
                <Left style={default_styles.vwLfH}>
                    <Title style={default_styles.cl00}>Transaksi</Title>
                </Left>
                <Right style={default_styles.right}>
                    {/* {this.loadingView()} */}
                </Right>
            </Header>

            <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4"/>

            <Tabs>

                <Tab heading={ <TabHeading><Text>Tambah Barang</Text></TabHeading>}>

                    <Item regular style={{backgroundColor:"#FFF"}}>
                        <Input placeholder='Barcode'
                            onChangeText={(text) => { text.length > 2 ? this.getProduct(text) : this.setState({itemProduct:[]}) }}
                            // keyboardType='numeric'
                        />
                    </Item>

                    <View style={{height:128}}>

                        {this.renderLoading()}

                        <FlatList
                            extraData={this.state}
                            data={this.state.itemProduct}
                            renderItem = {({item, index}) => (

                                <TouchableOpacity
                                    onPress={() => this.changeList(item)}
                                >
                                    <Card transparent>
                                        <CardItem>
                                            <Text>{item.name}</Text>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>

                            )}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                        
                    </View>

                    <Content>

                        <Separator bordered>
                            <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                <View style={{flex:1}}>
                                    <Text>Informasi Produk</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Text>Total : Rp. {this.state.totalCalculate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ({this.state.satuan_unit})</Text>
                                </View>
                            </View>
                        </Separator>

                        <List>
                            <ListItem thumbnail>
                                <Left />
                                <Body>
                                    <Text>{this.state.name_product}</Text>
                                    {/* <Text note numberOfLines={1}>Its time to build a difference . .</Text> */}
                                </Body>
                                <Right>
                                    <Input placeholder='Jumlah'
                                        maxLength={3}
                                        style={{marginBottom:-32}}
                                        onChangeText={(text) => { [this.setState({totalItem:text}), this.totalCalculate(text*this.state.satuan_hrg_product) ] }}
                                        keyboardType='numeric' autoCapitalize='none'/>
                                </Right>
                            </ListItem>
                        </List>

                        <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={() => [this.setState({satuan_hrg_product:this.state.itemHrgPcs, satuan_unit:"pcs"}), this.totalCalculate(this.state.totalItem * this.state.itemHrgPcs)] }>
                                    <Card
                                        title={null}
                                    >
                                        <Text style={{ marginBottom: 10, alignSelf:"center"}}>
                                            Harga pcs
                                        </Text>
                                        <Text style={{ marginBottom: 10, alignSelf:"center"}}>
                                            Rp. {this.state.itemHrgPcs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={() => [this.setState({satuan_hrg_product:this.state.itemHrgDz, satuan_unit:"dus"}), this.totalCalculate(this.state.totalItem * this.state.itemHrgDz)] }>
                                    <Card
                                        title={null}
                                    >
                                        <Text style={{ marginBottom: 10, alignSelf:"center" }}>
                                            Harga dus
                                        </Text>
                                        <Text style={{ marginBottom: 10, alignSelf:"center"}}>
                                            Rp. {this.state.itemHrgDz.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={() => [this.setState({satuan_hrg_product:this.state.itemHrgPck, satuan_unit:"pack"}), this.totalCalculate(this.state.totalItem * this.state.itemHrgPck)] }>
                                    <Card
                                        title={null}
                                    >
                                        <Text style={{ marginBottom: 10, alignSelf:"center"}}>
                                            Harga pack
                                        </Text>
                                        <Text style={{ marginBottom: 10, alignSelf:"center"}}>
                                            Rp. {this.state.itemHrgPck.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={() => [this.setState({satuan_hrg_product:this.state.itemHrgBx, satuan_unit:"box"}), this.totalCalculate(this.state.totalItem * this.state.itemHrgBx)] }>
                                    <Card
                                        title={null}
                                    >
                                        <Text style={{ marginBottom: 10, alignSelf:"center" }}>
                                            Harga box
                                        </Text>
                                        <Text style={{ marginBottom: 10, alignSelf:"center"}}>
                                            Rp. {this.state.itemHrgBx.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Content>

                    {this.state.totalCalculate != 0 ?

                        <Footer>
                            <FooterTab>
                                <Button full onPress={() => this.setState({total_harga_keseluruhan: (this.state.total_harga_keseluruhan + this.state.totalCalculate),
                                    totalCalculate: 0, satuan_unit: null, satuan_hrg_product:0,
                                    jumlah_kembalian:(this.state.total_harga_keseluruhan + this.state.totalCalculate)-this.state.jumlah_bayar,
                                    id_product:this.state.id_product+1,
                                    listTransaction: [...this.state.listTransaction, {id: this.state.id_product+1, name: this.state.name_product, unit: this.state.satuan_unit, price: this.state.satuan_hrg_product, qty: this.state.totalItem, item_discount:0, item_discount_subtotal:0, subtotal:this.state.totalCalculate} ] }) }>
                                    <Text>Tambahkan</Text>
                                </Button>
                            </FooterTab>
                        </Footer>

                    : null
                    }

                </Tab>

                <Tab heading={ <TabHeading><Text>List</Text></TabHeading>}>
                        <FlatList
                            data={this.state.listTransaction}
                            renderItem = {({item, index}) => (
                                <List>
                                    <ListItem>
                                        <Body>
                                            <Text>{item.name} (Rp. {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</Text>
                                            <Text note numberOfLines={1}>{item.qty} ({item.unit}) Sub (Rp. {item.subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</Text>
                                        </Body>
                                        <Right>
                                            <Button style={{ backgroundColor: "#c70d3a" }} onPress={() => this.removeListObject(item.id)}>
                                                <Icon active name="trash" />
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </List>
                            )
                            }
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    {/* <Content> */}

                        <List>

                            <Separator bordered>
                                <View style={{flex: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <View style={{flex:1}}>
                                        <Text>Informasi Transaksi</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>Invoice {this.state.invoice_code}</Text>
                                    </View>
                                </View>
                            </Separator>

                            <ListItem thumbnail>
                                <Left />
                                <Body>
                                    <Text>Total</Text>
                                </Body>
                                <Right>
                                    <Text>Rp. {this.state.total_harga_keseluruhan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left />
                                <Body>
                                    <Text>Pembayaran</Text>
                                </Body>
                                <Right>
                                    <Input placeholder='Jumlah'
                                        style={{marginBottom:-32}}
                                        value={this.state.jumlah_bayar}
                                        onChangeText={(text) => { [this.setState({jumlah_bayar:text, jumlah_kembalian:this.state.total_harga_keseluruhan - text }) ] }}
                                        keyboardType='numeric'/>
                                </Right>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left />
                                <Body>
                                    {this.state.jumlah_kembalian > 0 ? 
                                        <Text>Sisa</Text>
                                    :
                                        <Text>Kembalian</Text>
                                    }
                                </Body>
                                <Right>
                                    <Text>Rp. {this.state.jumlah_kembalian.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                </Right>
                            </ListItem>
                        </List>
                        
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Left>
                                <Button full onPress={() => this.storeTransaksi() }>
                                    <Text>Simpan</Text>
                                </Button>
                            </Left>
                            <Right style={{borderLeftColor:"white"}}>
                                <Button full onPress={() => null }>
                                    <Text>Print</Text>
                                </Button>
                            </Right>
                        </View>

                    {/* </Content> */}

                </Tab>

            </Tabs>

		</Container>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autoFocusBox: {
    position: 'absolute',
    height: 64,
    width: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    opacity: 0.4,
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  zoomText: {
    position: 'absolute',
    bottom: 70,
    zIndex: 2,
    left: 2,
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#F00',
    justifyContent: 'center',
  },
  textBlock: {
    color: '#F00',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});