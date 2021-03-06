import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers";
import { Company, CompanyProps } from "../../components/pages/company";
import { CreateMenuProps } from "./page-service/main-layout-props";

interface OwnProps {}

const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }, ownProps: OwnProps): CompanyProps => {
  return {
    mainLayoutProps: CreateMenuProps(state, { dispatch }),
  };
};

const connector = connect(
  (state: State) => state,
  (dispatch: Dispatch) => ({ dispatch }),
  mergeProps,
);

export default connector(Company);
