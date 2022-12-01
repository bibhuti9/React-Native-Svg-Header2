import {StyleSheet, View, useWindowDimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../themes/color';

export default function Header() {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <View style={{height: 90, backgroundColor: COLORS.primary}}>
        <Svg height={250} width={width} viewBox="0 0 1440 320">
          <Path
            fill={COLORS.primary}
            d="M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,288C840,288,960,288,1080,261.3C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
