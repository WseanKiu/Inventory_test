import React, { useState } from 'react';
import { GlobalState, GLobalStateContext } from '.';

type Props = {
    value?: GlobalState;
    children?: React.ReactElement;
};

const Provider = (props: Props): React.ReactElement => {
    const [currentUser, setCurrentUser] = useState<object | undefined>();
    const useCurrentUser = React.useMemo(
        () => ({
            currentUser,
            setCurrentUser: (user?: object): void => {
                setCurrentUser(user);
            },
        }),
        [currentUser],
    );

    return (
        <GLobalStateContext.Provider
            value={{
                useCurrentUser,
            }}
            {...props}
        />
    );
};

export default Provider;
