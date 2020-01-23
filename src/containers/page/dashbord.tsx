import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../redux/reducers";
import { Dashboard } from "../../components/pages/dashboard/alpha";
import { CreateMenuProps } from "./page-service/main-layout-props";

interface OwnProps {}

const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }, ownProps: OwnProps): AccountProps => {
  return {
    mainLayoutProps: CreateMenuProps(state, { dispatch }),
  };
};

const connector = connect(
  (state: State) => state,
  (dispatch: Dispatch) => ({ dispatch }),
  mergeProps,
);

export default connector(Dashboard);
