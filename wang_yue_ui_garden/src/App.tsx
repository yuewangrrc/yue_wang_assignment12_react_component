import React, { useState } from 'react';
import styled from 'styled-components';


// 简化的导入以避免可能的导入错误
import Button from './components/Button/Button';
import Text from './components/Text/Text';
import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import Label from './components/Label/Label';
import RadioButton from './components/RadioButton/RadioButton';
import Img from './components/Img/Img';
import HeroImage from './components/HeroImage/HeroImage';
import Table from './components/Table/Table';
import TableHeader from './components/Table/TableHeader/TableHeader';
import TableFooter from './components/Table/TableFooter/TableFooter';
import TableRow from './components/Table/TableRow/TableRow';
import TableCell from './components/Table/TableCell/TableCell';
console.log('App.tsx loaded');

console.log(Button)
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 8px;
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`;

function App() {
  console.log('App component rendering');

  const [dropdownValue, setDropdownValue] = useState('');
  const [radioValue, setRadioValue] = useState('option1');

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <AppContainer>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Text as="h1" size="xlarge" weight="bold" color="#2c3e50">
          Wang Yue's UI Garden
        </Text>
        <Text size="large" color="#7f8c8d">
          A Beautiful React Component Library
        </Text>
      </header>

      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <ComponentGrid>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Primary Buttons</Text>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
            </div>
          </div>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Secondary & Outline</Text>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Text & Labels</SectionTitle>
        <ComponentGrid>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Text Sizes</Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Text size="xsmall">Extra Small Text</Text>
              <Text size="small">Small Text</Text>
              <Text size="medium">Medium Text</Text>
              <Text size="large">Large Text</Text>
              <Text size="xlarge">Extra Large Text</Text>
            </div>
          </div>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Labels</Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Label variant="primary">Primary Label</Label>
              <Label variant="success">Success Label</Label>
              <Label required>Required Field</Label>
              <Label disabled>Disabled Label</Label>
            </div>
          </div>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Form Controls</SectionTitle>
        <ComponentGrid>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Dropdown</Text>
            <Dropdown
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
              placeholder="Select an option"
            />
          </div>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Radio Buttons</Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <RadioButton
                label="Option 1"
                value="option1"
                name="demo"
                checked={radioValue === 'option1'}
                onChange={setRadioValue}
              />
              <RadioButton
                label="Option 2"
                value="option2"
                name="demo"
                checked={radioValue === 'option2'}
                onChange={setRadioValue}
              />
              <RadioButton
                label="Disabled Option"
                value="option3"
                name="demo"
                disabled
                onChange={setRadioValue}
              />
            </div>
          </div>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Cards</SectionTitle>
        <ComponentGrid>
          <Card padding="medium" shadow hoverable>
            <Text weight="bold" style={{ marginBottom: '8px' }}>Interactive Card</Text>
            <Text size="small">This card has hover effects and is clickable.</Text>
          </Card>
          <Card padding="large" backgroundColor="#e3f2fd" borderColor="#2196f3">
            <Text weight="bold" color="#1976d2" style={{ marginBottom: '8px' }}>Colored Card</Text>
            <Text size="small">Custom colors make this card stand out.</Text>
          </Card>
          <Card padding="small" disabled>
            <Text weight="bold" style={{ marginBottom: '8px' }}>Disabled Card</Text>
            <Text size="small">This card is in disabled state.</Text>
          </Card>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Images</SectionTitle>
        <ComponentGrid>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Regular Image</Text>
            <Img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRmODFiZCIvPjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjIwMHgxNTA8L3RleHQ+PC9zdmc+"
              alt="Sample image"
              width="200px"
              height="150px"
              borderRadius="8px"
            />
          </div>
          <div>
            <Text weight="semibold" style={{ marginBottom: '8px' }}>Hero Image</Text>
            <HeroImage
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE1MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0ZjgxYmQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyYzNlNTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0idXJsKCNhKSIvPjx0ZXh0IHg9IjIwMCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhlcm8gSW1hZ2U8L3RleHQ+PC9zdmc+"
              alt="Hero image"
              height="150px"
              overlay={
                <div style={{ textAlign: 'center' }}>
                  <Text color="white" weight="bold">Beautiful Landscape</Text>
                </div>
              }
            />
          </div>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Table</SectionTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Name</TableCell>
              <TableCell isHeader>Age</TableCell>
              <TableCell isHeader>City</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>New York</TableCell>
            </TableRow>
            <TableRow striped>
              <TableCell>Jane Smith</TableCell>
              <TableCell>25</TableCell>
              <TableCell>Los Angeles</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>35</TableCell>
              <TableCell>Chicago</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}><strong>Total Records</strong></TableCell>
              <TableCell><strong>3</strong></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>

      <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
        <Text color="#7f8c8d">
          Built with  by Yue Wang | React + TypeScript + Styled Components
        </Text>
      </footer>
    </AppContainer>
  );
}
console.log(App);

export default App;
