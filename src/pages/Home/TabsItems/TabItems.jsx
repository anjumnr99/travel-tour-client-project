import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VideoContent from '../VideoContent/VideoContent';


const TabItems = () => {
    return (
        <div className='my-10'>

            <Tabs>
                <TabList>
                    <Tab><h1 className='text-lg font-medium'>Overview</h1></Tab>
                    <Tab><h1 className='text-lg font-medium'>Our Packages</h1></Tab>
                    <Tab><h1 className='text-lg font-medium'>Meet Our Tour Guides</h1></Tab>
                </TabList>

                <TabPanel>
                    <div>
                       <VideoContent></VideoContent>
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabItems;