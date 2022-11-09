import { useQuery } from '@tanstack/react-query';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import {
  ErrorWithRetry,
  NoData,
  Loading,
} from 'src/components/messages';
import { ElementList } from './ElementList';
import { getMaterial } from 'src/services/material';
import { ItemMaterial } from 'src/types/Material';
import { materialKeys } from 'src/pages/app/Material/queries';


const renderTabs = (material : ItemMaterial[]) => {
  const keys = new Set(material.map((item) => item.seccion));
  const tabs = Array.from(keys).sort();

  return(
    <Tabs
      defaultActiveKey={tabs[0]}
    >
      {tabs.map((key) => (
        <Tab eventKey={key} title={key}>
        <ElementList recursos={material.filter((item) => item.seccion === key)}/>
        </Tab>
      ))}
    </Tabs>
  );
}

export const MaterialCards = () => {
  const {
    data,
    isError,
    isLoading,
    refetch,
  } = useQuery(
    materialKeys.list(),
    getMaterial,
    {
      refetchOnWindowFocus: false,
      select: (data) => data?.data,
    },
  );

  const handleRetry = () => {
    refetch();
  };

  if(isLoading){
    return <Loading/>
  }

  if (isError || !data) {
    return <ErrorWithRetry onRetry={handleRetry}/>
  }

  if (data && data.results.length === 0) {
    return <NoData label="No hay material cargado"/>
  }

  return (
    <Row>
      <Col xs="12">
        {renderTabs(data.results)}
      </Col>
    </Row>
  )
}
