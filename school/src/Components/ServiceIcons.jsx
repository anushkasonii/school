import React, { useState } from 'react';
import { Grid, Box, Typography, Collapse, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    MeetingRoomOutlined, ChatOutlined, AcUnitOutlined, PaletteOutlined,
    NatureOutlined, AssignmentOutlined, ChairOutlined, MusicNoteOutlined,
    ScienceOutlined, FastfoodOutlined, MedicalServicesOutlined, SportsSoccerOutlined,
    LocalLibraryOutlined, AssessmentOutlined, SecurityOutlined, SelfImprovementOutlined,
    CheckCircleOutlined, DirectionsBusOutlined, TheaterComedyOutlined, MonetizationOnOutlined,
    ThermostatOutlined, BedOutlined, GroupOutlined, CleanHandsOutlined, ExploreOutlined,
    ComputerOutlined, CelebrationOutlined, SportsBasketballOutlined, FitnessCenterOutlined
} from '@mui/icons-material';


const services = [
    { icon: <MeetingRoomOutlined />, label: "Spacious Classrooms" },
    { icon: <ChatOutlined />, label: "Real-Time Parent Communication" },
    { icon: <AcUnitOutlined />, label: "Air-Conditioned Classrooms" },
    { icon: <PaletteOutlined />, label: "Art & Craft Workshops" },
    { icon: <NatureOutlined />, label: "Outdoor Play Area" },
    { icon: <AssignmentOutlined />, label: "Daily Reports" },
    { icon: <ChairOutlined />, label: "Child-Safe Furniture" },
    { icon: <MusicNoteOutlined />, label: "Music & Dance Classes" },
    { icon: <ScienceOutlined />, label: "STEM Learning Lab" },
    { icon: <FastfoodOutlined />, label: "Healthy Meal Program" },
    { icon: <MedicalServicesOutlined />, label: "First Aid Station" },
    { icon: <SportsSoccerOutlined />, label: "Sports & Physical Activities" },
    { icon: <LocalLibraryOutlined />, label: "Library & Reading Nook" },
    { icon: <AssessmentOutlined />, label: "Child Progress Reports" },
    { icon: <SecurityOutlined />, label: "CCTV Security" },
    { icon: <SelfImprovementOutlined />, label: "Yoga & Meditation" },
    { icon: <CheckCircleOutlined />, label: "Digital Attendance & Check-Ins" },
    { icon: <DirectionsBusOutlined />, label: "Transport Services" },
    { icon: <TheaterComedyOutlined />, label: "Drama & Theatre" },
    { icon: <MonetizationOnOutlined />, label: "Automated Billing & Invoicing" },
    { icon: <ThermostatOutlined />, label: "Temperature Monitoring" },
    { icon: <BedOutlined />, label: "Nap Rooms" },
    { icon: <GroupOutlined />, label: "Parent-Teacher Conferences" },
    { icon: <CleanHandsOutlined />, label: "Sanitization Stations" },
    { icon: <ExploreOutlined />, label: "Field Trips & Nature Excursions" },
    { icon: <ComputerOutlined />, label: "Computer Lab" },
    { icon: <CelebrationOutlined />, label: "Cultural Festivals & Celebrations" },
    { icon: <SportsBasketballOutlined />, label: "Indoor Sports Area" },
    { icon: <FitnessCenterOutlined />, label: "Fitness Activities" }
];

const IconWrapper = ({ children }) => React.cloneElement(children, { fontSize: "large", sx: { color: '#635881' } });

const ServiceIcons = () => {
    const [expanded, setExpanded] = useState(false);
    const itemsToShow = 8;  
    const remainingIconsCount = services.length - itemsToShow;

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Box>
            <Grid container spacing={3}>
                {services.slice(0, expanded ? services.length : itemsToShow).map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <IconWrapper>{service.icon}</IconWrapper>
                            <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.2, maxWidth: '120px', color: '#635881' }}>
                                {service.label}
                            </Typography>
                        </Box>
                    </Grid>
                ))}

               
                {!expanded && (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <Button onClick={handleToggle} >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 0.9,
                                        color: '#635881',
                                        fontWeight: 'bold',
                                        fontSize: '15px',
                                        paddingX: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                    }}
                                >
                                    +{remainingIconsCount} more <ExpandMoreIcon fontSize="small" />
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default ServiceIcons;
