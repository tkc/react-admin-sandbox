import React from "react";

export interface OwnState {}

export interface AccountEditBoxProps {
  obsubmit: () => void;
  back: () => void;
  formData: {};
}

function AccountEditBox(props: AccountEditBoxProps) {
  return <div className="row"></div>;
}
