import React, { Component } from 'react';
import './Artworks.css';
import ArtworkCard from "../components/ArtworkCard";
import ArtworkForm from './ArtworkForm';

const Artworks = (props) => (
    <div>
        <div className='ArtworksContainer'>
            <h3>Artworks</h3>
            {props.artworks.map((artwork) => (
                <ArtworkCard artwork={artwork} />
                )
            )}
            
            
        </div>
        <ArtworkForm />
    </div>
);

export default Artworks;