import { Splitter, SplitterPanel } from "primereact/splitter";

import HeaderMenu from "components/HeaderMenu";
// import Notification from "common/core/Notification";
// import TabsAndContent from "common/core/TabsAndContent";

export default function LayoutWithDetails() {
  return (
    <div className="App-container p-card">
      {/* <Notification /> */}
      <HeaderMenu />
      <Splitter style={{ height: "70vh" }}>
        <SplitterPanel size={90}>
          {/* <Content /> */}
          <div>ok</div>
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
