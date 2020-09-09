describe('Page Load Test', () => {
    it('Checks that the page returns 200 (success)', () => {
        cy
            .request('/')
            .then(resp => {
                expect(resp.status).to.eq(200)
            })
    })
});
