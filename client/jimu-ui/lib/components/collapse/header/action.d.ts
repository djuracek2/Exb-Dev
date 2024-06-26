/// <reference types="react" />
import { React } from 'jimu-core';
interface CollapsableActionProps {
    disabled?: boolean;
    activated?: boolean;
    icon?: any;
    activatedIcon?: any;
    onActivationChange?: (activated: boolean) => void;
}
declare const CollapsableAction: (props: CollapsableActionProps) => React.JSX.Element;
export default CollapsableAction;
