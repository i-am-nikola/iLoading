import { useLayoutEffect, useRef, useState } from "react"

type PopoverPropsType = {
    children: React.ReactNode
    target: React.ReactNode
    position: String
    show: Boolean
    className?: String
}
const Popover = (props: PopoverPropsType) => {

    const targetRef = useRef<HTMLDivElement>(null);
    let [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    let position = '';
    if (props.position === 'right') {
        position = `left-[100%] top-1/2 -translate-y-1/2`
    }

    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current['offsetWidth'],
                height: targetRef.current['offsetHeight']
            });
        }
    }, []);

    return (
        <div className="relative" ref={targetRef}>
            {props.target}
            {props.show && (
                <div
                    className={`absolute z-10 bg-white rounded shadow-lg border border-gray-200 w-72 ${position}`}
                >
                    {props.children}
                </div>
            )}
        </div>
    );
};

export default Popover;
