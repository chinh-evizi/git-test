import * as React from 'react';
import { connect } from 'react-redux'
import ProtectLayout from './ProtectLayout';

export interface IDashboardProps {
}

class Dashboard extends React.Component<IDashboardProps> {
  public render() {
    return (
      <ProtectLayout>
        <div>DASHBOARD NE</div>
      </ProtectLayout>
    );
  }
}

const mapState2Props = (state:any) => ({
  ...state
})

export default connect(mapState2Props)(Dashboard);
