import * as React from "react";
import { List } from "react-native-paper";
import Animated from "react-native-reanimated";

interface AccordionItem {
  id: number;
  title: string;
  icon?: string;
  items: string[];
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  const handlePress = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Animated.View>
      <List.Section>
        {data.map((section) => (
          <List.Accordion
            key={section.id}
            title={section.title}
            // left={(props) => // for icon before the text
            //   section.icon ? <List.Icon {...props} icon={section.icon} /> : null
            // }
            expanded={expandedId === section.id}
            onPress={() => handlePress(section.id)}
          >
            {section.items.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Accordion>
        ))}
      </List.Section>
    </Animated.View>
  );
};

export default Accordion;
