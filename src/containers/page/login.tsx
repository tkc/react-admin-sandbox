import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../redux/reducers";
import { Login, LoginProps } from "../../components/pages/user/login";

interface OwnProps {}

const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }, ownProps: OwnProps): LoginProps => {
  return {
    loading: false,
    onSubmit: () => {},
  };
};

const connector = connect(
  (state: State) => state,
  (dispatch: Dispatch) => ({ dispatch }),
  mergeProps,
);

export default connector(Login);
