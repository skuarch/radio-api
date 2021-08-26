import express from 'express';

export const loadStaticContent = app => {
    app.use(express.static('./static', { dotfiles: 'allow' }));
}