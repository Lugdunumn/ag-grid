import styled from '@emotion/styled';
import { useCurrentFeature } from 'atoms/currentFeature';
import { useEnabledFeatures } from 'atoms/enabledFeatures';
import { EnableFeatureButton } from 'components/inspector/EnableFeatureButton';
import { FeatureEditor } from 'components/inspector/FeatureEditor';
import { FeatureEditorPanel } from 'components/inspector/FeatureEditorPanel';
import { InspectFeatureButton } from './InspectFeatureButton';

export const Inspector = () => {
  const enabled = useEnabledFeatures();
  const inline = enabled.filter((f) => f.alwaysEnabled);
  const inspectable = enabled.filter((f) => !f.alwaysEnabled);
  const current = useCurrentFeature();

  return (
    <Container>
      {inline.map((feature) => (
        <FeatureEditor key={feature.name} feature={feature} />
      ))}
      <Divider />
      <EnableFeatureButton />
      {inspectable.map((feature) => (
        <InspectFeatureButton key={feature.name} feature={feature} />
      ))}
      <FeatureEditorPanel feature={current} />
    </Container>
  );
};

const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Divider = styled('div')`
  border-bottom: solid 1px var(--border-color);
`;
