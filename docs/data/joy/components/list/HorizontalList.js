import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

export default function HorizontalList() {
  return (
    <Box component="nav" aria-label="My site">
      <List
        role="menubar"
        row
        sx={{
          minWidth: 320,
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <Home />
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Products
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
