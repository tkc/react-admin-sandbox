import React from "react";

export interface OwnState {}

export interface AccountEditBoxProps {
  obsubmit: () => void;
  back: () => void;
  formData: {};
}

export class AccountEditBox extends React.Component<AccountEditBoxProps, OwnState> {
  constructor(props: AccountEditBoxProps) {
    super(props);
  }
  render() {
    return <div className="row"></div>;
  }
}
