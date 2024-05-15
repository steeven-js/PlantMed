import styles from './styles';
import {
  STANDARD_USER_AVATAR_WRAPPER_SIZE,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';
import {useContext} from 'react';
import {SvgXml} from 'react-native-svg';
import Link from '../../components/links/Link';
import * as Animatable from 'react-native-animatable';
import CategoriesData from '../../data/CategoriesData';
import {IndependentColors} from '../../config/Colors';
import OutletCard from '../../components/cards/OutletCard';
import av_woman_4 from '../../assets/avatars/svg/av_woman_4';
import GlobalOutletsData from '../../data/GlobalOutletsData';
import {ThemeContext} from '../../theming/contexts/ThemeContext';
import SectionTitle from '../../components/headings/SectionTitle';
import GridViewProductsData from '../../data/GridViewProductsData';
import ic_drawer_menu from '../../assets/icons/svg/ic_drawer_menu';
import GridViewProduct from '../../components/cards/GridViewProduct';
import SearchTextInput from '../../components/inputs/SearchTextInput';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

// Functional component
const Home = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.primary}]}>
      <Animatable.View animation="fadeInUp" delay={100}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          {/* Header */}
          <View style={styles.header}>
            {/* Hamburger menu */}
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <SvgXml
                xml={ic_drawer_menu}
                width={STANDARD_VECTOR_ICON_SIZE * 2}
                height={STANDARD_VECTOR_ICON_SIZE * 2}
              />
            </TouchableOpacity>

            {/* Avatar */}
            <SvgXml
              xml={av_woman_4}
              width={STANDARD_USER_AVATAR_WRAPPER_SIZE}
              height={STANDARD_USER_AVATAR_WRAPPER_SIZE}
            />
          </View>

          {/* Search text input component */}
          <SearchTextInput />

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="Categories" />

            {/* Link component */}
            <Link
              label="See all"
              onPress={() => navigation.navigate('Categories')}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Categories label scrollview wrapper */}
          <View>
            {/* Categories label scrollview */}
            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {CategoriesData.map((item, index) => {
                {
                  return index === 0 ? (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.categoryLabelWrapper,
                        {backgroundColor: theme.accent},
                      ]}
                      onPress={() => navigation.navigate('List View Products')}>
                      <Text
                        style={[
                          styles.categoryLabel,
                          {color: IndependentColors.white},
                        ]}>
                        View All
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.categoryLabelWrapper,
                        {backgroundColor: theme.secondary},
                      ]}
                      onPress={() => navigation.navigate('List View Products')}>
                      <Text
                        style={[
                          styles.categoryLabel,
                          {color: theme.textLowContrast},
                        ]}>
                        {item.categoryName}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Banner 1 */}
          <View style={styles.bannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/556_x_287.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="Most popular" />

            {/* Link component */}
            <Link
              label="See all"
              onPress={() => navigation.navigate('List View Products')}
            />
          </View>

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GridViewProductsData.map((product, index) => (
                <View key={index} style={styles.productWrapper}>
                  <GridViewProduct
                    productImage={product.productImage}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    onPress={() => navigation.navigate('Product')}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Banner 1 */}
          <View style={styles.bannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/556_x_287.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="Best seller" />

            {/* Link component */}
            <Link
              label="See all"
              onPress={() => navigation.navigate('Grid View Products')}
            />
          </View>

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GridViewProductsData.map((product, index) => (
                <View key={index} style={styles.productWrapper}>
                  <GridViewProduct
                    productImage={product.productImage}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    onPress={() => navigation.navigate('Product')}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Banner 3 */}
          <View style={styles.fullWidthBannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/808_x_338.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="New arrivals" />

            {/* Link component */}
            <Link label="See all" />
          </View>

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GridViewProductsData.map((product, index) => (
                <View key={index} style={styles.productWrapper}>
                  <GridViewProduct
                    productImage={product.productImage}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    onPress={() => navigation.navigate('Product')}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Banner 3 */}
          <View style={styles.fullWidthBannerImageWrapper}>
            <Image
              source={require('../../assets/images/banners/home/808_x_338.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="Recently viewed" />

            {/* Link component */}
            <Link label="See all" />
          </View>

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GridViewProductsData.map((product, index) => (
                <View key={index} style={styles.productWrapper}>
                  <GridViewProduct
                    productImage={product.productImage}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    onPress={() => navigation.navigate('Product')}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Section title & link wrapper */}
          <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            <SectionTitle title="Global outlets" />

            {/* Link component */}
            <Link label="See all" />
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />

          {/* Horizontal scroll view */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
              {GlobalOutletsData.map((outlet, index) => (
                <OutletCard
                  key={index}
                  outletImage={outlet.outletImage}
                  outletName={outlet.outletName}
                  rating={outlet.rating}
                  priceRange={outlet.priceRange}
                />
              ))}
            </ScrollView>
          </View>

          {/* Vertical spacer */}
          <View style={styles.verticalSpacer} />
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Home;
