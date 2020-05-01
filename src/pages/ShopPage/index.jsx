import React from "react";
import data from "../../mock";
import { CollectionPreview } from "../../components";

export default function ShopPage() {
  const [state, setState] = React.useState(data);

  console.log(state);
  return (
    <div className="shop-page">
      {state.map(({ id, ...rest }) => {
        return <CollectionPreview key={id} {...rest} />;
      })}
    </div>
  );
}
