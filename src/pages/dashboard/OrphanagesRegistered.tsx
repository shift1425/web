import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from "react-icons/fi";


import '../../styles/pages/create-orphanage.css';
import Sidebar from "../../components/Sidebar";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import { useHistory } from "react-router-dom";


export default function OrphanagesRegistered() {
 
  return (
    <div id="page-create-orphanage">
    <Sidebar />
      <main>
       
      </main>
    </div>
  );
}

