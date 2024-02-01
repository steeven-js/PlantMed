import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {useState} from 'react';
import FaqsData from '../../data/FaqsData';
import * as Animatable from 'react-native-animatable';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import ic_arrow_up_darkest_green from '../../assets/icons/svg/ic_arrow_up_darkest_green';
import ic_arrow_down_darkest_green from '../../assets/icons/svg/ic_arrow_down_darkest_green';
import { COLORS } from '../../config/Colors';

// Comparing
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Functional component
const AccordionItem = ({children, question, expanded, onHeaderPress}) => {

  // Defining accordion body
  const body = <View style={styles.accordionBody}>{children}</View>;

  // Returning
  return (
    <View style={styles.accordionWrapper}>
      <TouchableOpacity
        style={[styles.accordionHeader, {backgroundColor: COLORS.secondary}]}
        onPress={onHeaderPress}>
        {/* Question */}
        <Text style={[styles.question, {color: COLORS.textHighContrast}]}>
          {question}
        </Text>

        {/* Conditional rendering */}
        {expanded ? (
          <SvgXml
            xml={ic_arrow_up_darkest_green}
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        ) : (
          <SvgXml
            xml={ic_arrow_down_darkest_green}
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        )}
      </TouchableOpacity>

      {/* Conditional rendering */}
      {expanded && body}
    </View>
  );
};

// Functional component
const Accordion = ({data}) => {

  // Local states
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Method to handle press
  const handleHeaderPress = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Returning
  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}>
          <Text style={[styles.answer, {color: COLORS.textLowContrast}]}>
            {item.answer}
          </Text>
        </AccordionItem>
      ))}
    </>
  );
};

// Functional component
const Faqs = ({navigation}) => {

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: COLORS.primary}]}>
      {/* Scrollview */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* Accordion */}
        <Animatable.View animation="fadeInUp" delay={100}>
          <Accordion data={FaqsData} />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Faqs;
