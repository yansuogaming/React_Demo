import {
    Breadcrumb as BreadcrumbLib,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@ui/breadcrumb'
import { Fragment } from 'react';

const Breadcrumb = ({ items = [], className = '' }) => {
    return (
        <BreadcrumbLib className={className}>
            <BreadcrumbList>
                {items.map((item, index) => {
                    if (index === items.length - 1) {
                        return (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            </BreadcrumbItem>
                        )
                    }

                    return (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </Fragment>
                    )
                })}
            </BreadcrumbList>
        </BreadcrumbLib>
    )
};

export default Breadcrumb