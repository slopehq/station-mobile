import { useNavigation } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import _ from 'lodash'

import color from 'styles/color'

type HeaderType = 'blue' | 'white'

export type HeaderProps = {
  type?: HeaderType
  goBackIconType?: 'arrow' | 'close'
  containerStyle?: StyleProp<ViewStyle>
  headerLeft?: ReactElement
  headerCenter?: ReactElement
  headerRight?: ReactElement
  headerBottomTitle?: string
}

const HeaderBottomTitle = ({
  type,
  title,
}: {
  type?: HeaderType
  title?: string
}): ReactElement => {
  const containerStyle: StyleProp<ViewStyle> = {}
  const textStyle: StyleProp<TextStyle> = {}
  switch (type) {
    case 'blue':
      textStyle.color = color.white
      containerStyle.backgroundColor = color.sapphire
      break
    case 'white':
    default:
      textStyle.color = color.sapphire
      containerStyle.backgroundColor = color.white
      break
  }

  return (
    <>
      {_.some(title) && (
        <View style={[styles.headerBottomTitleBox, containerStyle]}>
          <Text style={[styles.headerBottomTitle, textStyle]}>
            {title}
          </Text>
        </View>
      )}
    </>
  )
}

const HeaderLeft = ({
  type,
  goBackIconType,
}: {
  type?: HeaderType
  goBackIconType?: 'arrow' | 'close'
}): ReactElement => {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity onPress={goBack}>
      <MaterialIcons
        name={
          goBackIconType === 'close' ? 'clear' : 'keyboard-arrow-left'
        }
        color={type === 'blue' ? color.white : color.sapphire}
        size={32}
      />
    </TouchableOpacity>
  )
}

const Header = (props: HeaderProps): ReactElement => {
  const { type } = props
  const insets = useSafeAreaInsets()

  const containerStyle: StyleProp<ViewStyle> = {}
  switch (type) {
    case 'blue':
      containerStyle.backgroundColor = color.sapphire
      containerStyle.paddingTop = insets.top
      break
    case 'white':
    default:
      containerStyle.backgroundColor = color.white
      containerStyle.paddingTop = insets.top
      break
  }
  return (
    <>
      <View
        style={[
          styles.container,
          containerStyle,
          props.containerStyle,
        ]}
      >
        {props.headerLeft || <HeaderLeft type={type} />}
        <View style={{ flex: 1 }}>{props.headerCenter}</View>
        {props.headerRight}
      </View>
      <HeaderBottomTitle
        title={props.headerBottomTitle}
        type={type}
      />
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  headerBottomTitleBox: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerBottomTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 39,
  },
})
