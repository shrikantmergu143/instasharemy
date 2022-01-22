import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import {
  Box,
  CardMedia,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  IconButton,
  Button,
  CardActions,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from 'src/components/Text';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);


function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>InstaShare</title>
      </Helmet>
      <PageTitleWrapper>
      </PageTitleWrapper>
      <div >
        <Card>
          <CardHeader
            avatar={<Avatar src="/static/images/avatars/5.jpg" />}
            action={
              <IconButton color="primary">
                <MoreHorizTwoToneIcon fontSize="medium" />
              </IconButton>
            }
            titleTypographyProps={{ variant: 'h4' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            title="Allison Lipshutz"
            subheader={
              <>
                Managing Partner
              </>
            }
          />
          <CardMedia
            sx={{ minHeight: 280 }}
            image="/static/images/placeholders/covers/6.jpg"
            title="Card Cover"
          />
          <Box p={3}>
            <Typography variant="h5" sx={{ pb: 1 }}>
              Organizing Your Remote Office for Maximum Productivity
            </Typography>
            <Typography variant="subtitle2">
              <Link href="#" underline="hover">example.com</Link> • 4 mins read
            </Typography>
          </Box>
          <Divider />
          <CardActionsWrapper
            sx={{
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
                Like
              </Button>
              <Button
                startIcon={<CommentTwoToneIcon />}
                variant="outlined"
                sx={{ mx: 2 }}
              >
                Comment
              </Button>
              <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
                Share
              </Button>
            </Box>
            <Box sx={{ mt: { xs: 2, md: 0 } }}>
              <Typography variant="subtitle2" component="span">
                <Text color="black">
                  <b>485</b>
                </Text>{' '}
                reactions •{' '}
                <Text color="black">
                  <b>63</b>
                </Text>{' '}
                comments
              </Typography>
            </Box>
          </CardActionsWrapper>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
