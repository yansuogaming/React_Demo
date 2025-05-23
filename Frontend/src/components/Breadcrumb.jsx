import {
    Breadcrumb as BreadcrumbLib,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@ui/breadcrumb'
import { Fragment } from 'react';
import { Link } from 'react-router';

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
                                <BreadcrumbLink asChild href={item.href}>
                                    <Link to={item.href}>{item.label}</Link>
                                </BreadcrumbLink>
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