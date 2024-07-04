const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');

const employeeRoutes = require('./routes/employee_routes');
const assetRoutes = require('./routes/asset_routes');
const assetCategoryRoutes = require('./routes/asset_category_routes');
const issueRoutes = require('./routes/issue_asset_routes');
const stockViewRoutes = require('./routes/stock_view_routes');
const assetReturnRoutes = require('./routes/asset_return_routes');
const scrapAssetRoutes = require('./routes/scrap_routes');
const assetHistoryRoutes = require('./routes/asset_history');



const app = express();
const PORT = process.env.PORT || 3000;

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/employees', employeeRoutes);
app.use('/assets', assetRoutes);
app.use('/assets/category', assetCategoryRoutes);
app.use('/stock', stockViewRoutes);
app.use('/return', assetReturnRoutes);
app.use('/issue', issueRoutes);
app.use('/scrap', scrapAssetRoutes);
app.use('/history', assetHistoryRoutes);





sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => console.log('Models synchronized...'))
  .catch(err => console.log('Error: ' + err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
