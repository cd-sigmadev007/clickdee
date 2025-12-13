import React from 'react';
import {
  Typography,
  Button,
  Input,
  Logo,
  Breadcrumbs,
  Checkbox,
  ProgressIndicator,
  Tabs,
  Label,
  Accordion,
  Card,
  Banner,
  Avatar,
  HoveringPopup,
} from './components';
import { MainLayout } from './layout';

function App() {
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <Typography variant="display" weight="bold" className="mb-4">
            ClickDee Design System
          </Typography>
          <Typography variant="p" weight="medium" className="text-neutral-500">
            A comprehensive design system built with React, TypeScript, and Tailwind CSS
          </Typography>
        </div>

        {/* Logo Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Logo
          </Typography>
          <div className="bg-white rounded-card p-8">
            <Logo />
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Typography
          </Typography>
          <div className="bg-white rounded-card p-8 space-y-6">
            <div>
              <Typography variant="display" weight="bold">
                Display - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="h1" weight="bold">
                H1 - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="h2" weight="medium">
                H2 Medium - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="h2" weight="bold">
                H2 Bold - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="h3" weight="medium">
                H3 Medium - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="h3" weight="bold">
                H3 Bold - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="h4" weight="medium">
                H4 - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="p" weight="medium">
                Paragraph - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="p" weight="bold">
                Paragraph Bold - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="s" weight="medium">
                Small - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="s" weight="bold">
                Small Bold - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="xs" weight="medium">
                X-Small - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
            <div>
              <Typography variant="2xs" weight="medium">
                2X-Small - The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Colors
          </Typography>
          <div className="bg-white rounded-card p-8">
            <div className="mb-8">
              <Typography variant="s" weight="bold" className="mb-4 text-neutral-500">
                Primary
              </Typography>
              <div className="flex gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-primary-100 rounded-input"></div>
                  <Typography variant="p" weight="bold">100</Typography>
                  <Typography variant="p" weight="bold">#F7FAFC</Typography>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-primary-200 rounded-input"></div>
                  <Typography variant="p" weight="bold">200</Typography>
                  <Typography variant="p" weight="bold">#ECF1F9</Typography>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-primary-500 rounded-input"></div>
                  <Typography variant="p" weight="bold">500</Typography>
                  <Typography variant="p" weight="bold">#0070FF</Typography>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-primary-600 rounded-input"></div>
                  <Typography variant="p" weight="bold">600</Typography>
                  <Typography variant="p" weight="bold">#005ACC</Typography>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <Typography variant="s" weight="bold" className="mb-4 text-neutral-500">
                Neutrals
              </Typography>
              <div className="flex gap-5 flex-wrap">
                {[
                  { value: '10', color: 'bg-neutral-10', hex: '#FFFFFF', border: 'border border-neutral-200' },
                  { value: '50', color: 'bg-neutral-50', hex: '#FAFAFA' },
                  { value: '100', color: 'bg-neutral-100', hex: '#F4F4F5' },
                  { value: '200', color: 'bg-neutral-200', hex: '#E4E4E7' },
                  { value: '300', color: 'bg-neutral-300', hex: '#D4D4D8' },
                  { value: '500', color: 'bg-neutral-500', hex: '#71717A' },
                  { value: '800', color: 'bg-neutral-800', hex: '#27272A' },
                  { value: '900', color: 'bg-neutral-900', hex: '#18181B' },
                ].map((item) => (
                  <div key={item.value} className="flex flex-col gap-1.5">
                    <div className={`w-[130px] h-[60px] ${item.color} ${item.border || ''} rounded-input`}></div>
                    <Typography variant="p" weight="bold">{item.value}</Typography>
                    <Typography variant="p" weight="bold">{item.hex}</Typography>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Typography variant="s" weight="bold" className="mb-4 text-neutral-500">
                Success & Error
              </Typography>
              <div className="flex gap-5">
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-success-100 rounded-input"></div>
                  <Typography variant="p" weight="bold">100</Typography>
                  <Typography variant="p" weight="bold">#BBF7D0</Typography>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-success-200 rounded-input"></div>
                  <Typography variant="p" weight="bold">200</Typography>
                  <Typography variant="p" weight="bold">#14532D</Typography>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-error-100 rounded-input"></div>
                  <Typography variant="p" weight="bold">100</Typography>
                  <Typography variant="p" weight="bold">#FECACA</Typography>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-[130px] h-[60px] bg-error-200 rounded-input"></div>
                  <Typography variant="p" weight="bold">200</Typography>
                  <Typography variant="p" weight="bold">#DC2626</Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Buttons
          </Typography>
          <div className="bg-white rounded-card p-8">
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">
                Get Leads Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button variant="outline">How it Works?</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Input with Typing State
          </Typography>
          <div className="bg-white rounded-card p-8 space-y-6">
            <Input
              label="Email address"
              placeholder="company@gmail.com"
              value={inputValue}
              onChange={setInputValue}
            />
            <Input
              label="Default State"
              placeholder="Default"
              state="default"
            />
            <Input
              label="Filled State"
              placeholder="Filled"
              state="filled"
              value="Filled"
            />
            <Input
              label="Error State"
              placeholder="Error"
              state="error"
              error="This field is required"
            />
          </div>
        </section>

        {/* Breadcrumbs Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Breadcrumbs
          </Typography>
          <div className="bg-white rounded-card p-8 space-y-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Free Inspection', isActive: true },
              ]}
              separator="chevron"
            />
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Free Inspection', isActive: true },
              ]}
              separator="slash"
            />
          </div>
        </section>

        {/* Checkbox Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Checkbox
          </Typography>
          <div className="bg-white rounded-card p-8 space-y-4">
            <Checkbox
              label="Unselected"
              checked={false}
            />
            <Checkbox
              label="Selected"
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
            />
          </div>
        </section>

        {/* Progress Indicator Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Progress Indicators
          </Typography>
          <div className="bg-white rounded-card p-8">
            <ProgressIndicator steps={3} currentStep={1} />
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Tabs
          </Typography>
          <div className="bg-white rounded-card p-8">
            <Tabs
              items={[
                { label: 'Home Services', value: 'home' },
                { label: 'Insurance', value: 'insurance' },
              ]}
              value={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </section>

        {/* Labels Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Labels
          </Typography>
          <div className="bg-white rounded-card p-8">
            <div className="flex gap-2.5">
              <Label>Pest Control</Label>
              <Label>Prevention</Label>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Accordions
          </Typography>
          <div className="bg-white rounded-card p-8">
            <Accordion
              items={[
                {
                  value: '1',
                  title: 'How do you ensure the quality of the fire leads I receive?',
                  content: 'We carefully vet all of our leads to ensure that they are prospects who are in need of fire restoration services. We also have a team of experts who review each lead to make sure that it meets our high standards of quality.',
                },
                {
                  value: '2',
                  title: 'What is your lead conversion rate?',
                  content: 'Our lead conversion rate varies depending on the industry and quality of leads. We work closely with our clients to optimize their conversion strategies.',
                },
              ]}
            />
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Cards
          </Typography>
          <div className="bg-white rounded-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card variant="elevated" className="flex flex-col items-center justify-center text-center h-[250px]">
                <div className="w-12 h-12 bg-primary-500 rounded-full mb-4"></div>
                <Typography variant="h4" weight="bold" className="mb-4">
                  Define what leads you want
                </Typography>
                <Typography variant="s" weight="medium" className="text-neutral-500">
                  Our portfolio of websites attracts potential clients with home service needs
                </Typography>
              </Card>
              <Card variant="bordered" className="flex flex-col justify-between h-[270px]">
                <div className="w-16 h-16 bg-primary-500 rounded-full"></div>
                <div>
                  <Typography variant="h3" weight="bold" className="mb-4">
                    Fire Damage
                  </Typography>
                  <Typography variant="s" weight="medium" className="text-neutral-500">
                    We help urgently seeking immediate assistance with fire damage re...
                  </Typography>
                </div>
              </Card>
              <Card variant="elevated" className="lg:col-span-2">
                <Typography variant="p" weight="medium" className="text-neutral-500 mb-4">
                  One of the most refreshing aspects of working with ClickDee is their transparent billing practices. Unlike other companies, they ensure fairness in every transaction, providing peace of mind to their clients.
                </Typography>
                <div className="flex items-center justify-between">
                  <div>
                    <Typography variant="p" weight="bold">Leland Kiehn</Typography>
                    <Typography variant="s" weight="regular" className="text-neutral-500">
                      Founder of Kiehn and Sons
                    </Typography>
                  </div>
                  <Avatar size="md" name="LK" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Banner
          </Typography>
          <div className="bg-white rounded-card p-8">
            <Banner
              title="Curious how many Leads we have in your Area?"
              description="We help you discover the number of leads in your area with ease!"
              actionLabel="Contact Us"
            />
          </div>
        </section>

        {/* Avatar Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Avatar
          </Typography>
          <div className="bg-white rounded-card p-8">
            <Avatar
              name="Albert Flores"
              role="Client"
              size="md"
            />
          </div>
        </section>

        {/* Hovering Popup Section */}
        <section className="mb-16">
          <Typography variant="h3" weight="bold" className="mb-8">
            Hovering Popup
          </Typography>
          <div className="bg-white rounded-card p-8">
            <HoveringPopup
              amount="$500"
              worth="worth"
              title="Fire Damage leads in"
              subtitle="Colorado"
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default App;

