import { Router } from 'express'

const router = Router()

router.get('/product', (req, res) => {
    res.json({ message: 'heelo' })
})
router.get('/product/:id', (req, res) => {
    res.json({ message: 'heelo' })
})
router.put('/product', (req, res) => {
    res.json({ message: 'heelo' })
})
router.post('/product', (req, res) => {
    res.json({ message: 'heelo' })
})
router.delete('/product', (req, res) => {
    res.json({ message: 'heelo' })
})


router.get('/update', (req, res) => {
    res.json({ message: 'heelo' })
})
router.get('/update/:id', (req, res) => {
    res.json({ message: 'heelo' })
})
router.put('/update', (req, res) => {
    res.json({ message: 'heelo' })
})
router.post('/update', (req, res) => {
    res.json({ message: 'heelo' })
})
router.delete('/update', (req, res) => {
    res.json({ message: 'heelo' })
})


router.get('/updatepoints', (req, res) => {
    res.json({ message: 'heelo' })
})
router.get('/updatepoints/:id', (req, res) => {
    res.json({ message: 'heelo' })
})
router.put('/updatepoints', (req, res) => {
    res.json({ message: 'heelo' })
})
router.post('/updatepoints', (req, res) => {
    res.json({ message: 'heelo' })
})
router.delete('/updatepoints', (req, res) => {
    res.json({ message: 'heelo' })
})

export default router