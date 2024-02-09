"use client"
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const CenteredContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px",
});
const Card = styled(Box)({
  backgroundColor: "rgb(255 245 222)",
  height: "max-content",
  width: "150px",
  borderRadius: "40px 0 40px 0px",
  padding: "20px",
});
const CustomStack = styled(Stack)({
  '@media(max-width: 992px)': {
    '& > div:nth-child(2), > div:nth-child(3)': {
      marginLeft: 45
    },
  },
    '@media(max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 30,
      '& > div:nth-child(2), > div:nth-child(3)': {
        marginLeft: 0
      },
  }
});
const Designation = styled(Typography)({
  fontSize: "11px",
  color: "gray",
});
export default function App() {
  return (
    <CenteredContainer>
      <Typography fontWeight="bold" fontSize={24} marginBottom={2}>
        Testimonials
      </Typography>
      <Typography textAlign={"center"} fontSize={14} marginBottom={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
        nemo deleniti? Quis, similique mollitia eum aliquam reprehenderit
        temporibus eveniet
      </Typography>
      <Link component="button" variant="body2">
        Read more
      </Link>
      
      <CustomStack direction="row" spacing={10} marginTop={5}>
        <Card sx={{padding:3,}}>
        <Typography fontSize={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          ipsam sint sunt ab
        </Typography>
        <Stack direction="row" alignItems={"flex-end"} spacing={1} marginLeft={-8} marginTop={2}>
          <Box>
            <Avatar alt="John Doe" sx={{width: 56, height:56 }}/> 
          </Box>
          <Box>
            <Typography>John Doe</Typography>
            <Designation>Marketing Head</Designation>
          </Box>
        </Stack>
       </Card>
       <Card sx={{padding:3}}>
        <Typography fontSize={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          ipsam sint sunt ab
        </Typography>
        <Stack direction="row" alignItems={"flex-end"} spacing={1} marginLeft={-8} marginTop={2}>
          <Box>
            <Avatar alt="John Doe" sx={{width: 56, height:56 }}/> 
          </Box>
          <Box>
            <Typography>Jack Ryan</Typography>
            <Designation>Marketing Head</Designation>
          </Box>
        </Stack>
       </Card>
       <Card sx={{padding:3}}>
        <Typography fontSize={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          ipsam sint sunt ab
        </Typography>
        <Stack direction="row" alignItems={"flex-end"} spacing={1} marginLeft={-8} marginTop={2}>
          <Box>
            <Avatar alt="John Doe" sx={{width: 56, height:56 }}/> 
          </Box>
          <Box>
            <Typography>Jenna Thomas</Typography>
            <Designation>Marketing Head</Designation>
          </Box>
        </Stack>
       </Card>
        
        {/* <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          ipsam sint sunt ab
          <Stack direction="row" spacing={2} marginTop={2} >
            <Box >
            <Avatar alt="John Doe" src="/static/images/avatar/1.jpg"  />
            </Box>
            <Box>
              <Typography>Jack Ryan</Typography>
              <Designation>Web Designer</Designation>
            </Box>
          </Stack>
        </Card>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          ipsam sint sunt ab
          <Stack direction="row" spacing={2} marginTop={2}>
            <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
            <Box>
              <Typography>Jeena Thqomas</Typography>
              <Designation>Business Developer</Designation>
            </Box>
          </Stack>
        </Card> */}
      </CustomStack>
    </CenteredContainer>
  );
}
