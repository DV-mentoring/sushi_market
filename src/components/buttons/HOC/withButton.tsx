import React from "react";
import "./styles.scss";

type WrappedButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};

export const withButton = <P extends object>(
    WrappedButton: React.ComponentType<WrappedButtonProps & P>
) => {
    return (props: WrappedButtonProps & P) => {
        return <WrappedButton {...props} />;
    };
};
