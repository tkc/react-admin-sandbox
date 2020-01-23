import { connect } from "react-redux";
import { Dispatch } from "redux";
import { push } from "connected-react-router";
import { State } from "../../reducers";
import { Account, AccountProps } from "../../components/pages/account";
import { CreateMenuProps } from "./page-service/main-layout-props";
import { paths } from "../../routes/paths";

interface OwnProps {}

const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }, ownProps: OwnProps): AccountProps => {
  return {
    mainLayoutProps: CreateMenuProps(state, { dispatch }),
    accountTableProps: {
      onclickEdit: (id: number) => {
        dispatch(push(paths.accountEdit.url));
      },
    },
    onClickNewAccount: () => {
      dispatch(push(paths.accountNew.url));
    },
  };
};

const connector = connect(
  (state: State) => state,
  (dispatch: Dispatch) => ({ dispatch }),
  mergeProps,
);

export default connector(Account);
