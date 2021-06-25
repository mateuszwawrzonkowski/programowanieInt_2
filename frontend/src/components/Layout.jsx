import { Splitter, SplitterPanel } from "primereact/splitter";
import { useQuery } from "@apollo/client";
import HeaderMenu from "components/HeaderMenu";
import Content from "components/Content";
import { GET_RECIPES } from "mutations/gqlQueriesMutations";
// import Notification from "common/core/Notification";
// import TabsAndContent from "common/core/TabsAndContent";

export default function LayoutWithDetails() {
  const { error, data, loading, refetch } = useQuery(GET_RECIPES);
  let isLoggin = sessionStorage.getItem("login");
  return (
    <div className="App-container p-card">
      <Content
        recipes={data?.allRecipes}
        refetch={refetch}
        isLoggin={isLoggin}
      />
    </div>
  );
}
