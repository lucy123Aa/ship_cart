import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MotiView, AnimatePresence } from "moti";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

interface AccordionItem {
  id: number;
  title: string;
  items: string[];
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <View>
      {data.map((section) => {
        const isOpen = expandedId === section.id;

        return (
          <View key={section.id} style={styles.container}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => toggle(section.id)}
              style={styles.header}
            >
              <Text style={styles.title}>{section.title}</Text>

              <MotiView
                animate={{ rotate: isOpen ? "270deg" : "90deg" }}
                transition={{ type: "timing", duration: 300 }}
              >
                <Octicons name="chevron-right" size={24} color="#000" />
              </MotiView>
            </TouchableOpacity>

            {/* CONTENT */}
            <AnimatePresence>
              {isOpen && (
                <MotiView
                  from={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "timing", duration: 300 }}
                  style={styles.content}
                >
                  {section.items.map((item, index) => (
                    <Text key={index} style={styles.item}>
                      {item}
                    </Text>
                  ))}
                </MotiView>
              )}
            </AnimatePresence>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 1,
    // borderColor: "#E5E7EB",
    paddingVertical: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
  },

  content: {
    marginTop: 8,
    paddingLeft: 5,
  },

  item: {
    fontSize: 14,
    color: "#000",
    paddingVertical: 6,
  },
});

export default Accordion;
