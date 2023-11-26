import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VideoContent from '../VideoContent/VideoContent';
import OurPackages from '../OurPackages/OurPackages';


const TabItems = () => {
    return (
        <div className='my-10'>

            <Tabs>
                <TabList>
                    <Tab><h1 className='text-md   md:text-lg font-medium'>Overview</h1></Tab>
                    <Tab><h1 className='text-md  md:text-lg  font-medium'>Our Packages</h1></Tab>
                    <Tab><h1 className='text-md  md:text-lg  font-medium'>Meet Our Tour Guides</h1></Tab>
                </TabList>

                <TabPanel>
                    <div>
                       <VideoContent></VideoContent>
                    </div>

                </TabPanel>
                <TabPanel>
                    <OurPackages></OurPackages>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabItems;