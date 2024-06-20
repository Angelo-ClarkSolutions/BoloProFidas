import React from "react";
import TopicColumn from "./topicColumn.component";
import "./topicList.component.css";

const TopicList: React.FC = () => {
  return (
    <div className="topicList">
      <TopicColumn
        title="Institucional"
        topics={[
          "Quem somos",
          "Clientes",
          "trabalhe conosco",
          "fale conosco",
          "notícias",
          "publicações",
        ]}
      />
      <TopicColumn
        title="Produtos"
        topics={["Bolos", "Tortas", "Canolli", "Sonhos", "Eclair", "Donuts"]}
      />
    </div>
  );
};

export default TopicList;
