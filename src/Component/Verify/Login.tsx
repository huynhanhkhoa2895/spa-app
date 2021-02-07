import React, { useState,useEffect } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image, Input } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import Config from '../../Config';
import { useDispatch } from 'react-redux';
import { updateState } from '../../reducer/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DOMAIN = Config.API_URL + "/api/"
const styles = StyleSheet.create({
  input: {
    width: "70%",
    margin: "auto"
  },
  stretch: {
    width: 200,
    height: 150,
    resizeMode: 'stretch',
    margin: "auto"
  },
})
const Login = (props: any) => {
  const from = props.route.params.from;
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)
  const [err, setErr] = useState({ phone: '', password: '', err: '' })
  const distpatch = useDispatch();
  const _updateState = (key: any, value: any) => distpatch(updateState(key, value))
  useEffect(() => {
    if (from != null) {
      Toast.show({
        type: 'info',
        text1: 'Xin lỗi! Bạn phải đăng nhập mới có thể tiếp tục',
      });
    }
  }, []);
  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
  });
  const handleLogin = () => {
    let checkPhone = false, chekPassWord = false;
    let newErr = { ...err }
    if (phone == '' || phone == null) {
      newErr.phone = "Số điện thoại không được để trống"
    } else {
      checkPhone = true
    }
    if (password == '' || password == null) {
      newErr.password = "Mật khẩu không được để trống"
    } else {
      chekPassWord = true
    }
    if (checkPhone && chekPassWord) {

      axios.post(DOMAIN + "login", { phone: phone, password: password }).then((result: any) => {
        const data = result.data;
        if (data.err == 0) {
          const user = { ...data.user, ...{ token: data.token } }
          _updateState("user", user);
          AsyncStorage.setItem("user", JSON.stringify(user))
          if (from != null) {
            props.navigation.navigate(from)
          } else {
            props.navigation.navigate("Layout")
          }

        } else {
          let newErr = { ...err }
          newErr.phone = '';
          newErr.password = '';
          newErr.err = 'Tên đăng nhập không tồn tại';
          setErr(newErr)
        }
      })
    } else {
      newErr.err = ''
      setErr(newErr)
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#9534eb" }}>
      <Image
        source={require('../../../asset/img/logo.png')}
        style={styles.stretch}
      />
      {
        err.err != '' && err.err != null && (
          <Text style={{ justifyContent: "center", padding: 10, fontSize: 14, color: "#fff", borderWidth: 1, backgroundColor: "red", borderColor: "red", borderRadius: 10, marginTop: 5, marginBottom: 5 }}>
            <Icon name='exclamation-triangle' />
            {err.err}
          </Text>
        )
      }

      <Input
        containerStyle={styles.input}
        style={{
          color: "#FFf"
        }}
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='#fff'
          />
        }
        placeholder={"Số điện thoại"}
        errorMessage={err.phone}
        onChangeText={(value: any) => setPhone(value)}
      />
      <Input
        containerStyle={styles.input}
        secureTextEntry={true}
        style={{
          color: "#FFf"
        }}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='#fff'
          />
        }
        placeholder={"Mật khẩu"}
        onChangeText={(value: any) => setPassword(value)}
        errorMessage={err.password}
      />
      <Button onPress={() => handleLogin()} title="Đăng nhập" />
    </View>
  )
}
export default Login