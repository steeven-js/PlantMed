import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import ic_disc_dark_green from '../../assets/icons/svg/ic_disc_dark_green';
import { STANDARD_VECTOR_ICON_SIZE } from '../../config/Constants';
import styles from './styles';

const Rules = (theme) => ({
    body: (node, children, parent) => (
        <View style={[styles.mainWrapper, { backgroundColor: theme.primary }]}>
            {children}
        </View>
    ),
    heading1: (node, children, parent) => (
        <Text key={node.key} style={[styles.heading1, { color: theme.accent }]}>
            {children}
        </Text>
    ),
    heading2: (node, children, parent) => (
        <Text
            key={node.key}
            style={[styles.lastUpdateDate, { color: theme.textHighContrast }]}
        >
            {children}
        </Text>
    ),
    heading3: (node, children, parent) => (
        <View key={node.key} style={styles.policyTitleWrapper}>
            <SvgXml
                xml={ic_disc_dark_green}
                width={STANDARD_VECTOR_ICON_SIZE}
                height={STANDARD_VECTOR_ICON_SIZE}
            />
            <Text
                key={node.key + '-text'}
                style={[styles.policyTitle, { color: theme.accent }]}
            >
                {children}
            </Text>
        </View>
    ),
    textgroup: (node, children, parent) => (
        <Text key={node.key} style={styles.policyDetails}>
            {children}
        </Text>
    ),
    paragraph: (node, children, parent) => (
        <Text key={node.key} style={{ color: theme.textLowContrast }}>
            {children}
        </Text>
    ),
    link: (node, children, parent) => (
        <Text key={node.key} style={{ color: theme.accent }}>
            {children}
        </Text>
    ),
});

export default Rules;
