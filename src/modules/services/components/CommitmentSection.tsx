import React from 'react';
import { Banner, Typography } from '@/components';
import { Card } from '@/components/Card';
import fireServiceBanner from '@/assets/images/fire-service-banner.png';


export interface CommitmentFeature {
    title: string;
    description: string;
    icon: string;
    linkText?: string;
}

export interface CommitmentSectionProps {
    title?: string;
    highlightedTitle?: string;
    description?: string;
    features?: CommitmentFeature[];
    banner?: {
        title: string;
        description: string;
    };
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({
    title = 'Our commitment sets us',
    highlightedTitle = 'apart',
    description = 'Clickdee offers lead distribution, targeted marketing approach, qualified leads, flexible scheduling, and transparent pricing. Being an advantageous partner for restoration companies looking to grow their business.',
    features = [],
    banner,
}) => {
    return (
        <div className="bg-neutral-100 flex flex-col gap-8 lg:gap-[32px] items-center justify-center px-4 py-11 sm:px-6 sm:py-14 lg:px-20 lg:py-22 w-full">
            {/* Heading */}
            <div className="flex flex-col sm:flex-row gap-[10px] items-center justify-center">
                <Typography
                    as="h2"
                    variant="title"
                    weight="bold"
                    className="text-neutral-900 text-center sm:text-left"
                >
                    {title}
                </Typography>
                <div className="bg-primary-200 px-[10px] py-[5px] rounded-[10px]">
                    <Typography
                        variant="title"
                        weight="bold"
                        className="text-primary-500"
                    >
                        {highlightedTitle}
                    </Typography>
                </div>
            </div>

            {/* Description */}
            <Typography
                variant="s"
                weight="medium"
                className="text-neutral-500 leading-[1.3] text-center max-w-4xl"
            >
                {description}
            </Typography>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[16px] w-full max-w-7xl">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        variant="bordered"
                        className=" flex flex-col justify-between p-8"
                    >
                        {/* Header with Title and Icon */}
                        <div className="flex items-start justify-between w-full">
                            <Typography
                                variant="h3"
                                weight="bold"
                                className="text-neutral-900 flex-1"
                            >
                                {feature.title}
                            </Typography>
                            <img
                                src={feature.icon}
                                alt=""
                                className="w-8 h-8 flex-shrink-0 ml-4"
                            />
                        </div>

                        {/* Description */}
                        <Typography
                            variant="s"
                            weight="medium"
                            className="text-neutral-500 leading-[1.3]"
                        >
                            {feature.description}
                        </Typography>

                        {/* Learn More Link */}
                        {feature.linkText && (
                            <div className="flex items-center gap-1 cursor-pointer group">
                                <Typography
                                    variant="s"
                                    weight="bold"
                                    className="text-primary-500"
                                >
                                    {feature.linkText}
                                </Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.56106 17.1527L15.2231 8.49067H7.7985L7.73486 7.49365H16.9272V16.686L15.9302 16.6224V9.19778L7.26817 17.8598L6.56106 17.1527Z" fill="#0070FF" />
                                </svg>
                            </div>
                        )}
                    </Card>
                ))}
            </div>

            {banner && (
                <Banner 
                    icon={<div className="w-[120px] h-[120px] flex-shrink-0 overflow-hidden"><img src={fireServiceBanner} alt="" className="w-full h-full object-contain" /></div>} 
                    title={banner.title} 
                    className='w-full lg:h-[170px]'
                    description={banner.description} 
                />
            )}
        </div>
    );
};

