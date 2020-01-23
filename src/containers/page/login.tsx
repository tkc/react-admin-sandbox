import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers";
import { Login, LoginProps } from "../../components/pages/user/login";
import * as usecase from "../../usecase";

interface OwnProps {}

const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }, ownProps: OwnProps): LoginProps => {
  return {
    loading: false,
    onSubmit: () => {
      usecase.login(dispatch, {});
    },
  };
};

const connector = connect(
  (state: State) => state,
  (dispatch: Dispatch) => ({ dispatch }),
  mergeProps,
);

export default connector(Login);
