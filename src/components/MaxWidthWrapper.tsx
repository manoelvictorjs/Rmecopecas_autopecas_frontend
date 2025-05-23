import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children
}:{
    className?:string
    children: ReactNode
})=>{
    return(
        <div className={cn("mx-auto w-full max-w-screen-x1 px-2.5 md:px-0",
            className
        )}>
            {children}
        </div>

    ) ;
    
};


export default MaxWidthWrapper