# Component composition

Handling component render through multiple UI components gives the composer more componibility

```tsx
<Dialog state={dialog} className="dialog">
    <DialogHeading className="heading">Success</DialogHeading>
    <DialogBody>
        <p className="description">
            Your payment has been successfully processed. 
            We have emailed your receipt.
        </p>
    </DialogBody>
    <DialogDismiss className="button">OK</DialogDismiss>
</Dialog>
```