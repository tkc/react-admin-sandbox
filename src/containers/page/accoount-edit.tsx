import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers";
import { AccountEditProps, AccountEdit } from "../../components/pages/account/edit";
import { CreateMenuProps } from "./page-service/main-layout-props";

interface OwnProps {}

const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }, ownProps: OwnProps): AccountEditProps => {
  return {
    mainLayoutProps: CreateMenuProps(state, { dispatch }),
    accountFormProps: {
      onSubmit: (id: number) => {},
    },
  };
};

const connector = connect(
  (state: State) => state,
  (dispatch: Dispatch) => ({ dispatch }),
  mergeProps,
);

export default connector(AccountEdit);
