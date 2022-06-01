import cn from 'classnames';
import React, { FC } from 'react';

/** Just exporting a container component with container class */
export const Container: FC<React.HTMLAttributes<HTMLDivElement>> = ({
   className,
   children,
   ...props
}) => {
   return (
      <div className={cn('px-4 mx-auto max-w-7xl', className)} {...props}>
         {children}
      </div>
   );
};
