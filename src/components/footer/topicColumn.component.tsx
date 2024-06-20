import React from "react";

interface TopicColumnProps {
  title: string;
  topics: string[];
}

const TopicColumn: React.FC<TopicColumnProps> = ({ title, topics }) => {
  return (
    <div className="topicColumn">
      <div className="topicTitle">{title}</div>
      {topics.map((topic, index) => (
        <div key={index} className="topic">
          {topic}
        </div>
      ))}
    </div>
  );
};

export default TopicColumn;
