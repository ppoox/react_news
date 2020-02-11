import React, { Component } from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

class NewsPage extends Component {
  render() {
    const { match } = this.props;
    const category = match.params.category || "all";

    return (
      <div>
        <Categories />
        <NewsList category={category} />
      </div>
    );
  }
}

export default NewsPage;
