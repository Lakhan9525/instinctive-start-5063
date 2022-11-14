import { Box, Button, Heading, Image, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Box mt="5rem">
       

        <Box width="100%" >
           <Box backgroundImage="https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-1400x550_DSK-INTL.jpg" width="100%"  backgroundRepeat= "no-repeat" backgroundSize="cover" backgroundPosition="center">
           <Image src='https://ak1.ostkcdn.com/img/mxc/11102022-HP-A1-INTL-V2-1400x550_DSK-INTL.svg' alt='image'/>

          </Box>
        </Box>

      {/* discount images */}
      <Box w="100%" align="center" m="2rem 0">

         <Heading fontWeight="500">Limited-Time Deals</Heading>

      </Box>


    {/* small part images */}

    <Box align="center" display="flex" flexWrap={"wrap"} gap="2rem" padding="1rem" justifyContent={"center"} >
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://media.istockphoto.com/photos/persian-rug-carpet-picture-id135093139" />
            <Text className={styles.off}><b>10</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Rugs</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://images.furnituredealer.net/img/collections/john_thomas/select_dining-dop-b1.jpg" />
            <Text className={styles.off}><b>20</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Dining Room</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://www.memory-improvement-tips.com/images/adjustable-sleep-number-bed.jpg" />
            <Text className={styles.off}><b>20</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Bedding</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://hometown.gumlet.io/media/cms/icons/Kitchenware/artificial.jpg?w=300&dpr=1.3" />
            <Text className={styles.off}><b>30</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Home Decor</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://ak1.ostkcdn.com/images/products/is/images/direct/47ec2d990aea2dcec4541518a0da6a4d6305d3d4/Modern-Farmhouse-3-Pack-Black-Barn-Pendant-Lighting-Warehouse-Ceiling-Lighting.jpg" />
            <Text className={styles.off}><b>20</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Lighting</Text>

          </Box>
      </Box>
        <Box>
          <Box className={styles.overFlow}>

            <Image className={styles.overFlow_image} src="https://tse1.mm.bing.net/th?id=OIP.BnSOX9TTI7AMooaiTUWsgQHaIP&pid=Api&P=0" />
            <Text className={styles.off}><b>15</b>% off*</Text>

          </Box>
          <Box align="center">

            <Text fontSize='md' fontWeight={"500"}>Select Christmas Tree</Text>

          </Box>
      </Box>
      
      
      

    </Box>
    {/* Brand we love */}
    <Box w="100%" align="center" m="2rem 0 1rem 0">

         <Heading fontWeight="500">Brands We Love</Heading>

    </Box>
    <Box height="2rem" width="80%" display="flex" justifyContent={"center"}  flexWrap="wrap"  gap="1rem" margin="auto">
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-DysonLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>
      <Box m="2rem">
        <Image src="https://ak1.ostkcdn.com/img/mxc/110822-KeurigLogo.svg?imwidth=1920" alt="" w="12rem"/>

      </Box>
      <Box m ="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-SharkLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>

    </Box>
    {/* 2nd row */}
    <Box height="2rem" width="80%" display="flex" flexWrap="wrap"  gap="1rem" margin="auto" >
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-NinjaLogo.svg?imwidth=1920" alt="" w="12rem"/>

      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CuisinartLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>

    </Box>

    {/* 3rd row */}

    <Box height="2rem" width="80%" display="flex" justifyContent={"flex-end"}  flexWrap="wrap"  gap="1rem" margin="auto" >
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CalphalonLogo.svg?imwidth=1920" alt="" w="12rem"/>
      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-HamiltonBeachLogo.svg?imwidth=1920" alt="" w="12rem"/>

      </Box>
      <Box m="2rem">
      <Image src="https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920" alt="" w="12rem"/>
      
      </Box>

    </Box>









    {/* 2nd backgroung */}

    <Box width="100%" mt="6rem">
      <Box backgroundImage="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920" width="100%"  backgroundRepeat= "no-repeat" backgroundSize="cover" backgroundPosition="center">
      <Image src="https://ak1.ostkcdn.com/img/mxc/10312022-SB-HolidayDecor-1400x550_Promo1.svg?imwidth=1920" />
    </Box>
    </Box>

    {/* Fresh Finds In Each Category */}

    <Text fontSize='50px'>Fresh Finds In Each Category</Text>
    <Box marginLeft="50px" display="flex"  height="300px" width="100%" gap="10px">
      
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920'/>
        <Text fontSize='md'>Furniter</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920'/>
        <Text fontSize='md'>Area Rugs</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920'/>
        <Text fontSize='md'>Bedding</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920'/>
        <Text fontSize='md'>Home Decor</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920'/>
        <Text fontSize='md'>Window Treatments</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920'/>
        <Text fontSize='md'>Kitchen</Text>
      </Box>
    </Box>
    <Box marginLeft="50px" display="flex" border="1px solid black" height="300px" width="100%">
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920'/>
        <Text fontSize='md'>Outdoor</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920'/>
        <Text fontSize='md'>Home Improvement</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920'/>
        <Text fontSize='md'>Storage</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920'/>
        <Text fontSize='md'>Mattresses</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920'/>
        <Text fontSize='md'>Lighting</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920'/>
        <Text fontSize='md'>Shop All Deals</Text>
      </Box>
    </Box>

    {/* Seasonal Updates to Warm up Your Winter */}

    <Text fontSize='50px'>Seasonal Updates to Warm up Your Winter</Text>



    <Box  marginLeft="50px" display="flex" border="1px solid black"gap="10px" height="450px" width="100%">
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame1.jpg?imwidth=1920'/>
        <Text fontSize='25px'>home gifts</Text>
        <Text fontSize='15px'>Gifts-ready home goods for everyone on your list</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame2.jpg?imwidth=1920'/>
        <Text fontSize='25px'>Kitchen appliances</Text>
        <Text fontSize='15px'>small but mighty tools that make food prep a breeze</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame3.jpg?imwidth=1920'/>
        <Text fontSize='25px'>Christmas trees</Text>
        <Text fontSize='15px'>The prefect place to put those perfect gifts</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/10272022-MOPS-HP-Frame4.jpg?imwidth=1920'/>
        <Text fontSize='25px'>holiday decor</Text>
        <Text fontSize='15px'>Deck your halls with the seasons festive finest</Text>
      </Box>
    </Box>

    {/* 3rd background image */}


    <Box width="100%" marginTop="10px">
           <Box backgroundImage="https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920" width="100%"  backgroundRepeat= "no-repeat" backgroundSize="cover" backgroundPosition="center" >
           <Image src='https://ak1.ostkcdn.com/img/mxc/10312022-A1-HP-INTL-1400x550_DSK-INTL.svg' alt='' />

    </Box>
    </Box>


    {/* Overstock Featured Brands */}
    <Text fontSize='40px'>Overstook Featured Brands</Text>


    <Box  marginLeft="50px" display="flex" height="500px" width="100%">
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_21238648.jpg?imwidth=1920'/>
        <Text fontSize='25px'>holiday decor</Text>
        <Text fontSize='15px'>Deck your halls with the seasons festive finest</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_39766562.jpg?imwidth=1920'/>
        <Text fontSize='25px'>holiday decor</Text>
        <Text fontSize='15px'>Deck your halls with the seasons festive finest</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_37373953.jpg?imwidth=1920'/>
        <Text fontSize='25px'>holiday decor</Text>
        <Text fontSize='15px'>Deck your halls with the seasons festive finest</Text>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_37777461.jpg?imwidth=1920'/>
        <Text fontSize='25px'>holiday decor</Text>
        <Text fontSize='15px'>Deck your halls with the seasons festive finest</Text>
      </Box>
    </Box>
    {/* wirhout heading */}

    <Box  marginLeft="50px" display="flex"  height="450px" width="100%">
      <Box>
        <Image src='https://edge.curalate.com/v1/img/iYuPKGHDS93J2r4a26wOyKimk387J1OdpF3dV90cLKI=/w/1080'/>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/11102022-SB-LivingRoomFurniture-1400x550_Promo2-INTLv2.svg?imwidth=1920'/>
      </Box>
      <Box>
        <Image src='https://edge.curalate.com/v1/img/iYuPKGHDS93J2r4a26wOyKimk387J1OdpF3dV90cLKI=/w/1080'/>
      </Box>

    </Box>

    {/* We've Got Your Style */}

    <Box>
    <Text fontSize='40px'> We've Got Your Style</Text>
    </Box>



    <Box  marginLeft="50px" display="flex" height="650px" width="100%">
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920'/>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920'/>
      </Box>
      <Box>
        <Image src='https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920'/>
      </Box>

    </Box>

    <Button colorScheme='blue'>See all styles</Button>

    {/* Trending Searches */}

    <Text fontSize='40px'>Trending Serches</Text>

    <Box>
      
    <SimpleGrid
  bg='gray.50'
  columns={{ sm: 3, md: 3 }}
  spacing='8'
  p='10'
  textAlign='center'
  rounded='lg'
  color='gray.400'
>
  <Box boxShadow='xs' p='6' as='b' fontSize="30px" rounded='md' bg='white'>
    Mugs
  </Box>
  <Box boxShadow='sm' p='6' as='b' fontSize="30px" rounded='md' bg='white'>
    Blanckets
  </Box>
  <Box boxShadow='base' p='6' as='b' fontSize="30px" rounded='md' bg='white'>
    Cookie Cutters
  </Box>
  <Box boxShadow='md' p='6' as='b' fontSize="30px" rounded='md' bg='white'>
    Air Fryers
  </Box>
  <Box boxShadow='lg' p='6' as='b' fontSize="30px" rounded='md' bg='white'>
    Kitchen Mixers
  </Box>
  <Box boxShadow='xl' p='6'as='b' fontSize="30px" rounded='md' bg='white'>
    Lamps
  </Box>
  <Box boxShadow='2xl' p='6' as='b' fontSize="30px" rounded='md' bg='white'>
    Towels
  </Box>
  <Box boxShadow='dark-lg' p='6'as='b'  fontSize="30px" rounded='md' bg='white'>
    Tree Skirts
  </Box>
  <Box boxShadow='outline' p='6' as='b'fontSize="30px" rounded='md' bg='white'>
    Garland
  </Box>
  <Box boxShadow='inner' p='6' as='b'fontSize="30px" rounded='md' bg='white'>
    Fall Wreaths
  </Box>
  <Box boxShadow='inner' p='6' as='b'fontSize="30px" rounded='md' bg='white'>
    Christmas Trees
  </Box>
  <Box boxShadow='inner' p='6' as='b'fontSize="30px" rounded='md' bg='white'>
    Fireplaces
  </Box>
</SimpleGrid>

    </Box>





    
      
        </Box>
  )
}

export default Home;
