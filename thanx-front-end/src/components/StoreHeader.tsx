import './StoreHeader.scss';

import Chouta from "./icons/chouta";

function StoreHeader(): JSX.Element {
  return (
    <div className="store-header">
      <Chouta/>
      <h1>the chouta cart</h1>
    </div>
  );
}

export default StoreHeader;
